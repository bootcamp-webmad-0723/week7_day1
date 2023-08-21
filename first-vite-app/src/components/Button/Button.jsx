import './Button.css'

const Button = ({ link, text }) => {

    return (
        <a className={'Button'} href={link}>{text}</a>
    )
}

export default Button