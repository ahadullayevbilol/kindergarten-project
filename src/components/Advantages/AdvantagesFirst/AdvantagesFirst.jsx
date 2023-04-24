import React from 'react'
import './AdvantagesFirst.scss'
import { TbHorseToy } from 'react-icons/tb'
import { GiBlackBook, GiHouse } from 'react-icons/gi'


const AdvantagesFirst = () => {
  return (
    <div className='advantagesFirst'>
        <div className="toys">
            <div className="horse">
                <TbHorseToy />
            </div>
            <div className="toys_info">
                <h3>Zamonaviy o'yinchoqlar</h3>
                <p>Odio nibh nullam leo a tincidunt. Egestas leo, tortor mattis tincidunt nam consectetur nibh. Vitae feugiat nascetur ultrices velit.</p>
            </div>
        </div>
        <div className="learning">
        <div className="learning">
                <GiBlackBook />
            </div>
            <div className="learning_info">
                <h3>Qiziqarli o'rganish</h3>
                <p>Odio nibh nullam leo a tincidunt. Egestas leo, tortor mattis tincidunt nam consectetur nibh. Vitae feugiat nascetur ultrices velit.</p>
            </div>
        </div>
        <div className="rooms">
        <div className="rooms">
                <GiHouse />
            </div>
            <div className="rooms_info">
                <h3>Katta yorug' xonalar</h3>
                <p>Odio nibh nullam leo a tincidunt. Egestas leo, tortor mattis tincidunt nam consectetur nibh. Vitae feugiat nascetur ultrices velit.</p>
            </div>
        </div>
    </div>
  )
}

export default AdvantagesFirst