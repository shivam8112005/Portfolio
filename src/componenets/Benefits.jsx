import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mt-14"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="exp"
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Projects"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[24rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                {/* Skills Section */}
                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-n-2 text-sm text-n-8 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center mt-auto">
                 
               
                <a href="" className="flex items-center mt-auto">
                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </a>
             
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;














// const Benefits = () => {
//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem] mt-14"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="exp"
//     >
//       <div className="container relative">
//         <Heading className="md:max-w-md lg:max-w-2xl" title="Projects" />

//         <div className="flex flex-wrap gap-10 mb-10">
//           {benefits.map((item) => (
//             <div
//               className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
//               style={{
//                 backgroundImage: `url(${item.backgroundUrl})`,
//               }}
//               key={item.id}
//             >
//               {/* Image Section */}
//               <div className="w-full h-[150px] ">
//   <img
//     src={item.imageUrl}
//     alt={item.title}
//     className="w-full object-cover"
//   />
// </div>

//               {/* Content Section */}
//               <div className="relative flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
//                 <h5 className="h5 mb-5">{item.title}</h5>
//                 <p className="body-2 mb-6 text-n-3">{item.text}</p>

//                 {/* Skills Section */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {item.skills.map((skill, index) => (
//                     <span
//                       key={index}
//                       className="bg-n-2 text-n-1 py-1 px-2 rounded-full text-xs"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Explore More */}
//                 <div className="flex items-center mt-auto">
//                   <p
//                     className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer"
//                     onClick={() => window.open(item.link, "_blank")}
//                   >
//                     Explore more
//                   </p>
//                   <Arrow />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Benefits;
