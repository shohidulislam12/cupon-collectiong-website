import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const GetOverview = ({brands}) => {
    const {brand_name,rating}=brands
    return (
        <div className="my-10 mx-auto md:w-1/2 ">
            <h2 className="text-2xl font-semibold infinite animate__delay-2s  animate__animated animate__slideInDown my-10 ">Get OverView </h2>
            

            <BarChart className='infinite animate__delay-2s  animate__animated animate__zoomIn' md:width={600} width={500} height={300} data={brands}>
    <XAxis dataKey="brand_name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="rating" fill="#8884d8" barSize={30} />
  </BarChart>
        </div>
    );
};

export default GetOverview;