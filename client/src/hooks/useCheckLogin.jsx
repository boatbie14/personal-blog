import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

function useCheckLogin() {
  const [isOpen, setIsOpen] = useState(false);
  const showAlert = () => {
    setIsOpen(true);
  };

  const hideAlert = () => {
    setIsOpen(false);
  };

  const AlertDialogComponent = () => (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <div className="text-right">
          <button>
            <X onClick={hideAlert} className="cursor-pointer" />
          </button>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-3xl mt-[-10px]">Create an account to continue.</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={hideAlert} className="m-auto rounded-full p-6">
            Create account
          </AlertDialogAction>
        </AlertDialogFooter>
        <p className="text-center mb-4">
          Already have an account?{" "}
          <Link to="/" className=" text-black underline">
            Log in
          </Link>
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );

  return {
    showAlert,
    hideAlert,
    AlertDialog: AlertDialogComponent,
  };
}

export default useCheckLogin;
