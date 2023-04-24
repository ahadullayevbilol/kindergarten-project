import './Teachers.scss'
import teacher1 from './assets/teacher1.jpg'
import teacher2 from './assets/teacher2.jpg'
import teacher3 from './assets/teacher3.jpg'
import teacher4 from './assets/teacher4.jpg'

const Teachers = () => {
  return (
    <div className='teachers'>
        <div className="teachers_info2">
            <h6>Mutaxassislar</h6>
            <p>Tarbiyachilarimiz</p>
        </div>
        <div className="teachers_card">
            <article className='card'>
                    <img src={teacher1} alt="teacher1" />
                <p>Dawson Timms</p>
                <code>
                    Senior Winemaker
                </code>
            </article>
            <article className='card'>
                    <img src={teacher2} alt="teacher2" />
                <p>Michele Bailey</p>
                <code>
                    Wine Critic
                </code>
            </article>
            <article className='card'>
                    <img src={teacher3} alt="teacher3" />
                <p>Philip Klein</p>
                <code>
                    Company Director
                </code>
            </article>
            <article className='card'>
                    <img src={teacher4} alt="teacher5" />
                <p>Brian Marsh</p>
                <code>
                    Winemaker Junior
                </code>
            </article>
        </div>
    </div>
  )
}

export default Teachers