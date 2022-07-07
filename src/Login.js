import React, { useContext, useState } from 'react';
import AppContext from './AppContext';

function Login() {
    const context = useContext(AppContext);
    const [ad, setAd] = useState("");

    const handleSubmit = function(event) {
        event.preventDefault();
        context.setUserName(ad);
        setAd("");
    };

    return (
        <div>
            <h3>Kullanıcı Girişi: {context.userName}</h3>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="ad">Kullanıcı Adı:</label>{" "}
                <input type="text" id="ad" required value={ad}
                    onChange={(e) => setAd(e.target.value)} />{" "}
                <button>Giriş Yap</button>
            </form>
        </div>
    );
}

export default Login