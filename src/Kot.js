import React, { useState }  from 'react';


function Cat(props){

    const [kit, setKit] = useState({
        back:'defaultShape.png',
        color:'#1698d9',
        topTxt:'Сказочное заморское явство',
        botTxt: props.bottom,
        defBottom: 'Чего сидишь? Порадуй котэ, <a className="kupi" href="#">купи</a><span>.</span>',
        ustal:"#000"
    });

    const [active, setActive] = useState(false);

    const navod = () => {
        if (!active){
            setKit({
                back:'hoverShape.png',
                color:'#2ea8e6',
                topTxt:'Сказочное заморское явство',
                botTxt: props.bottom,
                defBottom: 'Чего сидишь? Порадуй котэ, <a className="kupi" href="#">купи</a><span>.</span>'
            })
        }
    }

    const uvod = () => {
        if (!active){
            setKit({
                back:'rejectShape.png',
                color:'#e62e7a',
                topTxt:'Котэ не понравилось?',
                topTxtColor: '#e62e7a',
                botTxt: props.bottom,
                defBottom: 'Чего сидишь? Порадуй котэ, <a className="kupi" onClick={clack} href="#">купи</a><span>.</span>'
            })
        }
    }

    const clack = () =>{
        if (props.disab !== 'da'){
        setActive(true);
        if (!active){
            setKit({
                back:'selectShape.png',
                color:'#d91667',
                topTxt:'Сказочное заморское явство',
                topTxtColor: '#666',
                botTxt: props.bottom,
                defBottom: 'Чего сидишь? Порадуй котэ, <a className="kupi" href="#">купи</a><span>.</span>'
            })
        }
        else{
            setKit({
                back:'defaultShape.png',
                color:'#1698d9',
                topTxt:'Сказочное заморское явство',
                botTxt: props.bottom,
                defBottom: 'Чего сидишь? Порадуй котэ, <a className="kupi" href="#">купи</a><span>.</span>'
            })
            setActive(false);
        }
        }else{
            setKit({
                back:'disabledShape.png',
                color:'#b3b3b3',
                topTxt:'Сказочное заморское явство',
                botTxt: props.bottom,
                defBottom: 'Чего сидишь? Порадуй котэ, <a className="kupi" href="#">купи</a><span>.</span>',
                ustal:'#b3b3b3'
            })
            setActive(true);
        }
    }

    return(
        <div className="catBlock" >
            <div onClick={clack} onMouseOut={uvod} onMouseOver={navod} className="shape shape1" style={{
            background:`url(./`+ kit.back +`) no-repeat center center`}}>
                <div className="microwrapper">
                    <div style={{color:kit.topTxtColor}} className="topTxt">
                        {kit.topTxt}
                    </div>
                    <div style={{ color: kit.ustal}} className="name">
                        Нямушка
                    </div>
                    <div style={{ color: kit.ustal}} className="taste">
                        {props.taste}
                    </div>
                    <div className="count">
                        {props.count} порций<br />
                        {props.mouse} в подарок<br/>
                        {props.tret}
                    </div>
                </div>
                <div style={{ background: kit.color}} className="ves">
                    {props.kg}
                    <div className="kg">
                        кг
                    </div>
                </div>
            </div>
            <div className="underShapeTxt">
                {active
                    ? props.disab ? 'Кончилось' : props.bottom
                    : <div>Чего сидишь? Порадуй котэ, <a className="kupi" onClick={clack} href="#">купи</a><span>.</span></div>
                }
            </div>
        </div>
    )
}

function Cats(){
    return(
        <div className="cats">
            <Cat bottom="Печень утки разварная с артишоками." mouse="мышь" taste="с фуа-гра" count="10" kg="0,5"/>
            <Cat bottom="Головы щучьи с чесноком да свежайшая сёмгушка." mouse="2 мыши" taste="с фуа-гра" count="10" kg="2"/>
            <Cat disab="da" tret="заказчик доволен" bottom="Филе из цыплят с трюфелями в бульоне." mouse="15 мышей" taste="с фуа-гра" count="100" kg="5"/>
        </div>
    )
}

export default Cats;