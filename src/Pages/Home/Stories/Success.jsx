import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Shared from '../../../Components/Shared/Shared';

const Success = () => {
    return (
        <div>
            <Shared heading={"Inspiring Success Stories"} sub={"Real Transformation,Real Results"}></Shared>

             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='p-28 space-y-5 text-center'>
            <img className='w-[400px] mx-auto' src="https://i.postimg.cc/BZh8BxKS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg" alt="" />
            <p className='text-2xl font-bold'>Emma Thompson</p>
            <p className='font-medium'>Thanks to this incredible fitness community, I've not only achieved my weight loss goals but discovered a newfound love for staying active. The support and diverse workouts have made my fitness journey both enjoyable and rewarding.</p>
        </SwiperSlide>
        <SwiperSlide className='p-28 space-y-5 text-center'>
            <img className='w-[400px] mx-auto' src="https://i.postimg.cc/5024XRpw/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position-1368-132662.jpg" alt="" />
            <p className='text-2xl font-bold'>James Rodriguez</p>
            <p className='font-medium'>Joining this fitness platform has been a game-changer for me. The personalized workout plans and expert guidance helped me build strength and endurance. I feel more energized and confident than ever before.</p>
        </SwiperSlide>
        <SwiperSlide className='p-28 space-y-5 text-center'>
            <img className='w-[400px] mx-auto' src="https://i.postimg.cc/zXbfw4N7/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-st.jpg" alt="" />
            <p className='text-2xl font-bold'>Sarah Chen</p>
            <p className='font-medium'>Being a part of this fitness family has been amazing. The variety of classes keeps me motivated, and the positive atmosphere pushes me to challenge myself. My fitness levels have soared, and I've never felt better.</p>
        </SwiperSlide>
        <SwiperSlide className='p-28 space-y-5 text-center'>
            <img className='w-[400px] mx-auto' src="https://i.postimg.cc/s2yDrXhH/young-brazilian-man-isolated-white-background-laughing-1368-362553.jpg" alt="" />
            <p className='text-2xl font-bold'> Alex Morales</p>
            <p className='font-medium'>I can't express how grateful I am for this fitness community. The mindfulness sessions and diverse training options have not only improved my physical health but also contributed to my mental well-being. Truly a holistic approach to fitness!</p>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Success;