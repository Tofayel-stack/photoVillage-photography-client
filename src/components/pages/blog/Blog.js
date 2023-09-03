import React from 'react';
import img1 from '../../../Assets/blog/blog-1.jpg';
import img2 from '../../../Assets/blog/blog-2.jpg';
import img3 from '../../../Assets/blog/blog-3.jpg';
import img4 from '../../../Assets/blog/blog-4.jpg';
import img5 from '../../../Assets/blog/blog-5.jpg';
import img6 from '../../../Assets/blog/blog-6.jpg';
import DetaisCard from './DetaisCard';



const Blog = () => {
    const blogPhotos = [
        {
            pic:img1,
            ques:'How To Prepare For A Photo Session ?',
            details:'Choose a location: Decide on the location you want for your photo session. It could be a park, a beach, a city street, or even in your own backyard. Make sure to choose a location that is comfortable for you and your photographer, and that will provide good lighting and a backdrop that complements your style and the mood you want to convey Choose your outfits Choose your outfits ahead of time and make sure they complement each other and the location. Coordinate colors and avoid busy patterns or logos that can be distracting in photos. Make sure you feel comfortable in your outfit as it will show in the photos.Consider hair and makeup: If you want to look your best, consider getting your hair and makeup done professionally. It will help boost your confidence and make you look and feel your best in the photos.'
        },
        {   
            pic:img2,
            ques:'5 Questions You Should Be Asking Your Photographer ?',
            details:'What is your photography style? Its important to know if the photographers style aligns with your vision for your photos. Some photographers specialize in candid or documentary-style photos, while others may focus on posed portraits or fine art photography.What is included in your packages? Make sure you know whats included in the photographers packages, such as the number of photos youll receive, the length of the session, and any additional services like retouching or printing.Can you provide references or a portfolio? Its always a good idea to see examples of the photographers previous work or speak with past clients to get an idea of their experience working with the photographer.'
        },
        {
            pic:img3,
            ques:'Best Location Ideas For Your Child Photo Shoot ?',
            details:'Park or nature reserve: Parks and nature reserves are great locations for outdoor photo shoots. Look for locations with trees, flowers, or water features that can add visual interest to the photos.Urban or industrial settings: If youre looking for an edgier or more urban feel, consider locations such as alleyways, graffiti walls, or abandoned buildings. Just make sure to prioritize safety and obtain any necessary permits before shooting Beach or waterfront: If youre lucky enough to live near the coast or a lake, consider a beach or waterfront location for your photo shoot. These locations offer a lot of visual interest and can make for some stunning photos.'
        },
        {
            pic:img4,
            ques:'Creating Polarization Effect In DJI Drone Photography?',
            details:'Attach a circular polarizing filter to your DJI drone camera. Make sure the filter is the correct size for your camera and is compatible with your drone model.Take off and fly your drone to the desired location for your photo shoot. Look for areas with shiny surfaces that may cause glare or reflections.Adjust the polarization filter by rotating it until you see the desired effect. Youll notice that the polarization effect changes depending on the angle of the filter. Experiment with different angles until you find the one that works best for your shot.Take your photos as you normally would. You ll notice that the colors and contrast are enhanced, and any glare or reflections from shiny surfaces are reduced.'
        },
        {
            pic:img5,
            ques:'The Blushing Bride With A Bouquet On Hand Photography ?',
            details:'Choose the right location: Choose a location with a beautiful and complementary backdrop, such as a garden, park, or beach. Make sure the lighting is good and avoid harsh shadows or direct sunlight.Prepare the bouquet: Make sure the bride s bouquet is fresh and arranged nicely. A simple and elegant bouquet can complement the bride s dress and not distract from the overall photo Pose the bride: Position the bride so that she is standing at an angle to the camera, with her bouquet held in front of her. This angle will create a flattering silhouette and add depth to the photo.'
        },
        {
            pic:img6,
            ques:'8 Key Differences You Need To Know Before Buying Camera ?',
            details:'Sensor size: The size of the camera s sensor will affect the image quality and low-light performance. Larger sensors will generally produce better image qualityMegapixel count: The number of megapixels will affect the image resolution. Higher megapixel counts will produce sharper and more detailed images, but may not necessarily improve image quality.Lens compatibility: Different cameras are compatible with different lenses, so it s important to consider which lenses you may want to use before buying a camera. Image stabilization: Image stabilization can help reduce blur in photos, especially in low-light situations. Some cameras have built-in image stabilization, while others require image stabilization to be built into the lens.'
        },
    ]
    return (
       <div className='bg-gray-700 lg:py-28 py-4'>
            <div className='container grid grid-cols-1 lg:grid-cols-3 m-auto'>
                {
                    blogPhotos.map(blogPhoto => <DetaisCard
                        key={blogPhoto.ques}
                        cardData={blogPhoto}
                    >   
                    </DetaisCard> )
                }
            </div>
       </div>
    );
};

export default Blog;