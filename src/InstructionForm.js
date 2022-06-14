export default function InstructionForm({ instructionInForm, setInstructionInForm, handleSubmit }) {
  return (<form onSubmit={handleSubmit}>
    <input value={instructionInForm} onChange={e => setInstructionInForm(e.target.value)} />
    <button style={{ margin: '5px' }}>Submit instruction</button>
  </form>);
}