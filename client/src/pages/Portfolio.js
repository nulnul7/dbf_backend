import { React, useEffect, useState } from 'react';
import defaultImages from '../assets/defaultImages.jpeg';
import ModalPortfolio from '../components/ModalPortfolio';
import axiosInstance from '../config';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([])
    const [categoryPortf, setCategoryPortf] = useState([]);
    const [urlImage, setUrlImage] = useState('')
    const [awal, setAwal] = useState(true)
    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState([])
    const [isPictReload, setIsPictReload] = useState(false)
    const [pictDisplay, setPictDisplay] = useState('')


    useEffect(() => {
        const getPortfolios = async () => {
            try {
                const portf = await axiosInstance('http://localhost:5500/5R2I/portfolio')
                setPortfolios(portf.data)
                setCategoryPortf(portf.data)
            } catch (error) {
                console.log(error);
            }
        }
        getPortfolios()
    }, [])

    const titlePortf = awal ? portfolios.map(item => {
        return (
            <li onMouseOver={() => pictShow(item._id)} key={item._id} onClick={() => openModal(item._id)}>{item.title}</li>
        )
    }) : categoryPortf.map(item => {
        return (
            <li onMouseOver={() => pictShow(item._id)} key={item._id} onClick={() => openModal(item._id)}>{item.title}</li>
        )
    })

    const pictShow = (id) => {
        const deImage = portfolios.find((item) => {
            return item._id === id
        })
        setUrlImage(deImage.photos.toString());
    }

    const category = (i) => {
        setAwal(false);
        i === 'all' ? setCategoryPortf(portfolios.filter(item => item.category !== 'all'))
            : setCategoryPortf(portfolios.filter(item => item.category === i));
    }

    const openModal = (id) => {
        setModal(true);
        setModalContent(portfolios.find(item => item._id === id));
    }

    const closeModal = () => {
        setModal(false);
        setModalContent([''])
        setIsPictReload(false)
    }

    const changeDisplay = (i) => {
        setIsPictReload(true)
        setPictDisplay(modalContent.photos[i])
        console.log('dot yg ke', i);
    }

    return (
        !modal ?
            <div className='pContainer'>
                <div className='pWrapper'>
                    <div className='pCategory'>
                        <ul>
                            <li className='category' onClick={() => category('Graphic Design')}>Graphic Design</li>
                            <li className='category' onClick={() => category('Web Design')}>Web Design</li>
                            <li className='category' onClick={() => category('Photography')}>Photography</li>
                            <li className='category' onClick={() => category('all')}>All</li>
                        </ul>
                    </div>
                    <div className='pContent'>

                        <div className='pLists'>
                            <ul>
                                {titlePortf}
                            </ul>
                        </div>
                        <div className='pImages'>
                            <img src={urlImage || defaultImages} alt='' className='showImages' />
                        </div>

                    </div>
                </div>
            </div>
            : <div className='modalContainer'>
                <div className='modalPortf'>
                    <div className='xMark' onClick={closeModal}>X</div>
                    <div className='contentModal'>

                        <ModalPortfolio
                            title={modalContent.title}
                            client={modalContent.client}
                            description={modalContent.description}
                            modalPict={!isPictReload ? modalContent.photos[0] : pictDisplay}
                            dots={modalContent.photos}
                            changeDisplay={changeDisplay}
                        />

                    </div>
                </div>
            </div>
    )
}

export default Portfolio


