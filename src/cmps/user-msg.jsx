export const UserMsg = ({ txt, status, closeUserMsg }) => {
  return (
    <section
      className={`user-msg ${status === 'success' ? 'success' : 'error'}`}
    >
      <button onClick={closeUserMsg}>X</button>
      {txt}
    </section>
  )
}
