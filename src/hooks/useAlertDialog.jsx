// useAlertDialog.js
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function useAlertDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    title: "แจ้งเตือน",
    description: "",
    actionLabel: "ตกลง",
  });

  const showAlert = ({ title, description, actionLabel } = {}) => {
    setAlertConfig({
      title: title || "แจ้งเตือน",
      description: description || "",
      actionLabel: actionLabel || "ตกลง",
    });
    setIsOpen(true);
  };

  const hideAlert = () => {
    setIsOpen(false);
  };

  // คอมโพเนนต์ AlertDialog ที่จะใช้
  const AlertDialogComponent = () => (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertConfig.title}</AlertDialogTitle>
          {alertConfig.description && <AlertDialogDescription>{alertConfig.description}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={hideAlert}>{alertConfig.actionLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return {
    showAlert,
    hideAlert,
    AlertDialog: AlertDialogComponent,
  };
}

export default useAlertDialog;
