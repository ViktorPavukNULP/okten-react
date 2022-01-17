import './Car.css';

const Car = ({car}) => {
    return (
        <div className="Car">
            <h3>ID: {car.id}</h3>
            <h3>Model: {car.model}</h3>
            <h3>Price: {car.price}</h3>
            <h3>Year: {car.year}</h3>
        </div>
    );
};

export default Car;