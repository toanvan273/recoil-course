
import {atom, useRecoilState, useRecoilValue} from 'recoil'

const darkModeState = atom({
    key: 'darkMode',
    default: false
})

// Global State: {darkMode: true/false}

const DarkModeSwithch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    // console.log('darkMode',darkMode)
    return (
        <input type="checkbox" 
            checked={darkMode} 
            onChange={event=>{
                setDarkMode(event.currentTarget.checked)
            }}
        />
    )
}

const Button = () => {
    // const [darkMode] = useRecoilState(darkModeAtom)
    const darkMode = useRecoilValue(darkModeState)
    return (
        <button
        style={{
            backgroundColor: darkMode? 'black': 'white',
            color: darkMode? 'white': 'black'
    }}
        >My UI Button</button>
    )
}

 const Atoms = ( ) =>{
    return (
    <div>
        <div>
            <DarkModeSwithch />
        </div>

        <div>
            <Button />
        </div>
    </div>
    )
}

export default Atoms