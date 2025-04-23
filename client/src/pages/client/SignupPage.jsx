import MainLayout from "@/layouts/MainLayout";
import FormRegister from "@/components/signup/FormRegister";
import SuccessRegister from "@/components/signup/SuccessRegister";

function SignUp() {
  return (
    <MainLayout>
      <section className="row min-h-[70vh] flex flex-col">
        <div className="container py-10">
          <div className="form-container">
            <FormRegister />
            <SuccessRegister />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default SignUp;
