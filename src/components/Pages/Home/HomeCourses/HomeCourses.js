import { Link } from 'react-router-dom';
import useCourses from '../../../Hooks/useCourses';
import HomeCourse from './HomeCourse';

const HomeCourses = () => {
    const [courses] = useCourses();

    const sliceTeacher = courses.slice(0, 3);
    return (
        <div className='mb-4 px-12'>
            <div className='border-l-8 border-l-indigo-600 p-6 m-6  text-white'>
                <h1 className='text-6xl font-bold italic uppercase'>
                    <span  className='text-2xl font-bold text-indigo-500'>popular <br /></span>
                    courses</h1>
                <h5 className='text-lg font-sans'>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.</h5>
            </div>
            <div className="pt-12">
              
              <div className="grid lg:grid-cols-3 gap-4 place-content-around">
                {sliceTeacher.map((course) => (
                  <HomeCourse key={course._id} course={course}></HomeCourse>
                ))}
              </div>
            </div> 
            <div className='text-center my-4'>
                <Link to="/courses">
                    <button className="btn btn-primary">
                      view more
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeCourses;