import Instruction from './Instruction';

export default function InstructionList({ instructions }) {
  return (<div className='special-instructions'>
    <h3>Special instructions</h3>
    <ul>
      {
        instructions.map((instruction, i) => <Instruction key={instruction + i} instruction={instruction} />)
      }
    </ul>
  </div>);
}