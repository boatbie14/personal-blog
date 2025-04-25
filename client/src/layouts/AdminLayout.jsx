import "@/styles/admin.css";
import AppSidebar from "@/components/admin/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function AdminLayout({ children, title, saveButton, createArticleBtn, draftButton, createCatBtn }) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full">
        <header className="w-full flex flex-row h-16 items-center gap-2 border-b px-4">
          <div className="flex flex-row w-1/2 gap-6">
            <SidebarTrigger />
            <h1 className="text-2xl font-semibold">{title}</h1>
          </div>

          <div className="flex flex-row w-1/2 justify-end gap-4">
            {draftButton && (
              <button type="submit" form="admin-form" className="black-outline-btn">
                {draftButton}
              </button>
            )}

            {saveButton && (
              <button type="submit" form="admin-form" className="black-btn">
                {saveButton}
              </button>
            )}

            {createArticleBtn && (
              <a href="/admin/article/create" className="black-btn">
                {createArticleBtn}
              </a>
            )}

            {createCatBtn && (
              <a href="/admin/category/create" className="black-btn">
                {createCatBtn}
              </a>
            )}
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default AdminLayout;
