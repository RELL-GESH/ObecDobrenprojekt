import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <a href="home"><h1>Obec Dobren</h1></a>
            <a href='About'>O obci</a>
            <a href='Home'>Pamatky</a>
            <a href='Contact'>kontakty</a>
            <a href='#'></a>
            <div className='menu-btn'>☰</div>
        </div>
    )
}