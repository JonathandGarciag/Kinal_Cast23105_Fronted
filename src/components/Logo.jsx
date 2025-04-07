
import logo from '../assets/img/perroMadriso.png'
 
export const Logo = ({text}) => {
    return(
        <div className="auth-form-logo-container">
            <img src = {logo} alt='PerroChristian'/>
            <span> {text} </span>
        </div>
    )
}

