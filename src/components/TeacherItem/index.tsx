import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fjpa3-1.fna.fbcdn.net/v/t1.0-1/p200x200/72951536_259098058403622_1861381063071236096_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=hD-cKbNgGTwAX85TUH9&_nc_ht=scontent.fjpa3-1.fna&_nc_tp=6&oh=8f3e057ede8b0b6176c378f953e0e266&oe=5F4DD38E" alt="Alessandra Fontes" />
                <div>
                    <strong>Alessandra Fontes</strong>
                    <span>Química</span>
                </div>

            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências, mais de 200 mil pessoas já passaram por uma das minhas explosões.
                </p>

            <footer>
                <p>
                    Preço/hora <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;