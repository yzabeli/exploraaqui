import React, { useState } from "react";
import './styles.css';
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";

export default function Cabecalho() {
    const [showSettings, setShowSettings] = useState(false); // Controle de exibição do menu de configurações

    // Função para alternar a visibilidade do menu de configurações
    const toggleSettingsMenu = () => {
        setShowSettings(prevState => !prevState);
    };

    return (
        <header className="cabecalho">
            <div className="logo-head">
                <h1>EXPLORE AQUI</h1>
            </div>
            <div className="icon-container">
                <a href="https://www.instagram.com" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.google.com.br/maps/place/Senac+Bauru" aria-label="Localização">
                <IoLocationSharp />
                </a>
                <div className="settings-icon" onClick={toggleSettingsMenu} aria-label="Configurações">
                <TiThMenuOutline />
                
                </div>
                {/* Menu de configurações */}
                {showSettings && (
                    <div className="settings-menu">
                        <ul>
                            <li><a href="/configuracoes/gerais">Configurações Gerais</a></li>
                            <li><a href="/configuracoes/conta">Conta</a></li>
                            <li><a href="/configuracoes/idioma">Idioma</a></li>
                            <li><a href="/configuracoes/tema">Tema</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
