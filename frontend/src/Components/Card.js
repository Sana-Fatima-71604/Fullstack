import './DashboardSample.css';

function Card({title, count, color}) {
    const style = {
        color: color,
        fontSize: '60px'
    }
    return (

    <div className="card text-center" id="card1"><p style={style}>{count}</p><br/>{title}</div>

    )
}

export default Card;