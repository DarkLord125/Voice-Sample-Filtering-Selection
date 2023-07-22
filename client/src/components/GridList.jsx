/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getallVoice } from '../API';
import {useStateValue} from "../context/StateProvider";
import {actionType} from "../context/reducer";
import AudioPlayer from './CardDetails';


const Gridlist = () => {

  const [{ allVoices, genderFilter, languageFilter, ageFilter }, dispatch] = useStateValue();

  const [filteredVoices, setFilteredVoices] = useState(null);

  useEffect(() => {
      if (!allVoices) {
          getallVoice().then((data) => {
              dispatch({
                  type: actionType.SET_ALL_VOICES,
                  allVoices: data.data,
              });
          });
      }
  }, []);

  useEffect(() => {
    const filtered = allVoices?.filter(
      (data) =>
        (!genderFilter || data.gender === genderFilter) &&
        (!ageFilter || data.age === ageFilter) &&
        (!languageFilter || data.language === languageFilter)
    );
  
    if (filtered) {
        setFilteredVoices(filtered);
    } else {
        setFilteredVoices(null);
    }
  }, [allVoices, genderFilter, ageFilter, languageFilter]);

    return (
        <div className="flex-1">
            <VoiceContainer data={filteredVoices ? filteredVoices : allVoices} />
        </div>
  );
}

export const VoiceContainer = ({ data }) => {
    return (
      <div className="grid grid-cols-2 gap-y-10 gap-x-20 p-20">
        {data &&
          data.map((voice) => (
            <div key={voice._id}>
              <AudioPlayer data={voice} />
            </div>
          ))}
      </div>
    );
  };
  
  

export default Gridlist;