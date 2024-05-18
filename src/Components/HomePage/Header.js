import './HomePage.css';
import arrow_narrow_right from '../../assets/img/arrow-narrow-right.svg'
import BlueParallogram from '../BlueParallogram/BlueParallogram';


const HeadSection = () => {
    return (
        <>
            <div className="pt-5" >
                <div className="d-flex justify-content-center">

                    <BlueParallogram >
                        <div className="d-flex gap-3 align-items-baseline">
                            <p className="mb-0 text-blue font-space">Laser Tag</p>
                            <div className="dot" />
                            <p className="mb-0 text-blue font-space">6D Cinema</p>
                            <div className="dot" />
                            <p className="mb-0 text-blue font-space">Entertainment Center</p>
                        </div>
                    </BlueParallogram>
                </div>
                <p className="font-space fs-5vw text-center text-white mx-auto w-25ch mt-4" >The Pinnacle of Entertainment Hubs</p>
                <p className='my-4 font-poppins fs-18 text-white-80 text-center w-50 mx-auto'>Dive into thrilling multiplayer battles, epic adventures, and the latest releases. Challenge friends or embark on solo missions. Get ready for non-stop fun!"</p>

                <div>
                    <ul className="d-flex gap-3 justify-content-center">
                        <button class="white-image-button px-5 text-blue font-space">Booking</button>
                        <div className="d-flex gap-2">
                            <p className='text-white mb-0 align-content-center font-space'>Explore</p>
                            <img src={arrow_narrow_right} alt='arr' />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HeadSection;