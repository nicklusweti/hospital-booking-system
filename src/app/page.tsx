import PatientForm from "@/components/forms/patient-form";
import Link from "next/link";

const Home = () => {
  return (
    <section className="bg-background h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end  lg:col-span-5 lg:h-full xl:col-span-6 ">
          <img
            src="https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 "
          />
        </section>
        <section className="flex items-center justify-center p-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-5xl h-full">
            <div className="mt-8 flex flex-col space-y-6">
              <h1 className="mt-2 text-2xl font-bold  sm:text-3xl md:text-4xl">
                Welcome to <span className="text-primary">HealthHub.</span>
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Schedule your appointment today
              </p>
              <PatientForm />
              <div className=" w-full flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  © 2024 HealthHub. All rights reserved.
                </p>
                <Link
                  href="/"
                  className="text-primary font-semibold text-sm hover:underline transition-colors duration-300"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Home;
