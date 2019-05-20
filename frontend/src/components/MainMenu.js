import React from 'react'


class MainMenu extends React.component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={style.Match}>
                <h1> Find Match </h1>
            </div>


            <div className={style.Options}>
                <h1> options </h1>
            </div>


            <div className={style.Logout}>
                <h1> Log out </h1>
            </div>
        )
    }
}






export default MainMenu