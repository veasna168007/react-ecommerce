import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Footer from "../components/Footer"


function RootLayout() {
  return (
      <>
            <TopBar />
            <Header />
            {/* ការដាក់ className="min-h-screen" នៅលើ main គឺដើម្បីធ្វើឲ្យ main មានកម្ពស់យ៉ាងហោចណាស់ស្មើនឹងកម្ពស់របស់ផ្ទៃអេក្រង់។ 
            នេះមានប្រយោជន៍ក្នុងការធានាថា main នឹងគ្របដណ្តប់លើផ្ទៃអេក្រង់ទាំងមូល ដោយមិនមានចន្លោះខាងក្រោម។ ប្រសិនបើ main 
            មានមាតិកាខ្លី ឬគ្មានមាតិកា main នឹងនៅតែគ្របដណ្តប់លើផ្ទៃអេក្រង់ ហើយបង្កើតភាពស្អាតនិងរចនាបទល្អ។ */}
            <main className="min-h-screen">
              <Outlet />
            </main>
            <Footer />
      </>
  )
}

export default RootLayout