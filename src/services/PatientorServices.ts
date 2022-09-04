import DiagnoseData from '../../data/diagnosis';
import { Diagnose } from '../../types';


const diagnosis:Array<Diagnose> = DiagnoseData; 

const getAllDiagnose = () => {
  return diagnosis;
};


export default {
  getAllDiagnose
};