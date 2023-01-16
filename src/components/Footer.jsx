import React from 'react'

function Footer() {
  return (
    <footer>
        <span>Copyright &copy;</span> &nbsp;&nbsp;
        <span>{new Date().getFullYear()}</span> &nbsp;&nbsp;
        <span>|</span>&nbsp;&nbsp;
        <span> Junfel Velasco </span>
    </footer>
  )
}

export default Footer