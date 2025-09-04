import {
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Shield,
} from "lucide-react";

const LoginPage = () => {
  //       const features = [
  //     {
  //       icon: <Clock className="w-6 h-6" />,
  //       title: "Real-time Tracking",
  //       description: "Monitor attendance as it happens"
  //     },
  //     {
  //       icon: <Users className="w-6 h-6" />,
  //       title: "Team Overview",
  //       description: "See who's in, who's out, at a glance"
  //     },
  //     {
  //       icon: <CheckCircle2 className="w-6 h-6" />,
  //       title: "Easy Check-in",
  //       description: "Simple one-click attendance marking"
  //     }
  //   ];

  return (
    //  <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
    //   {/* Background Pattern */}
    //   <div className="absolute inset-0 opacity-10">
    //     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
    //     <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
    //       <defs>
    //         <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
    //           <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
    //         </pattern>
    //       </defs>
    //       <rect width="100" height="100" fill="url(#grid)" />
    //     </svg>
    //   </div>

    //   <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
    //     {/* Main Illustration */}
    //     <div className="mb-12 relative">
    //       {/* Clock Background */}
    //       <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
    //         <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center relative">
    //           <Clock className="w-24 h-24 text-white" strokeWidth={1.5} />

    //           {/* Floating Icons */}
    //           <div className="absolute -top-8 -right-8 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
    //             <CheckCircle2 className="w-8 h-8 text-white" />
    //           </div>

    //           <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
    //             <Users className="w-8 h-8 text-white" />
    //           </div>

    //           <div className="absolute top-12 -left-12 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-lg">
    //             <Calendar className="w-6 h-6 text-white" />
    //           </div>

    //           <div className="absolute -top-12 left-12 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
    //             <TrendingUp className="w-6 h-6 text-white" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Title */}
    //     <div className="text-center mb-8">
    //       <h1 className="text-4xl font-bold mb-4">
    //         Smart Attendance
    //         <span className="block text-2xl font-normal text-blue-100 mt-2">
    //           Management System
    //         </span>
    //       </h1>
    //       <p className="text-blue-100 text-lg max-w-md">
    //         Streamline your workforce management with our intelligent attendance tracking platform
    //       </p>
    //     </div>

    //     {/* Features */}
    //     <div className="space-y-6 max-w-sm">
    //       {features?.map((feature, index) => (
    //         <div key={index} className="flex items-start space-x-4 group">
    //           <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
    //             <div className="text-blue-100 group-hover:text-white transition-colors duration-200">
    //               {feature?.icon}
    //             </div>
    //           </div>
    //           <div>
    //             <h3 className="font-semibold text-white mb-1">{feature?.title}</h3>
    //             <p className="text-blue-100 text-sm">{feature?.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Stats */}
    //     <div className="mt-12 grid grid-cols-3 gap-8 text-center">
    //       <div>
    //         <div className="text-3xl font-bold text-white mb-1">99.9%</div>
    //         <div className="text-blue-200 text-sm">Uptime</div>
    //       </div>
    //       <div>
    //         <div className="text-3xl font-bold text-white mb-1">50K+</div>
    //         <div className="text-blue-200 text-sm">Users</div>
    //       </div>
    //       <div>
    //         <div className="text-3xl font-bold text-white mb-1">24/7</div>
    //         <div className="text-blue-200 text-sm">Support</div>
    //       </div>
    //     </div>

    //     {/* Security Badge */}
    //     <div className="mt-8 flex items-center space-x-2 text-blue-100">
    //       <Shield className="w-4 h-4" />
    //       <span className="text-sm">Enterprise-grade security</span>
    //     </div>
    //   </div>
    // </div>
    <div className="'w-full">
      <div></div>
      <div>
        <div className="shadow-md p-8 rounded-md h-">
          <div>
            {/* <img src="" alt="" /> */}
            <h1>Login to your account</h1>
          </div>
          <div>
            <form>
              <div className="flex flex-col ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
                <div>
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
// import React from 'react';

// const AttendanceImageSection = () => {

//   return (

//   );
// };

// export default AttendanceImageSection;
