import { NavLink as Link } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {

    return (
        <Link to={to} {...props} >
            {children}
        </Link>
    )
}

export {CustomLink};
