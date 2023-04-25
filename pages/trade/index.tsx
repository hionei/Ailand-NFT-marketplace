import Button from '@mui/material/Button'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SideNav from '../../components/Navbar/SideNav'
import FilterCard from '../../components/Trade/Filter/FilterCard'
import ItemCard from '../../components/Trade/ItemCard'
import Layout from '../../components/Trade/Layout'
function index(): JSX.Element {
  return (
    <div className="mx-auto">
      {/* <ItemCard /> */}
      {/* <FilterCard /> */}
      {/* <Header />
      <SideNav className="col-span-1" />
      <FilterCard className="max-w-[250px]" />
      <ItemCard />
      <Footer /> */}
      <Layout />
    </div>
  )
}

export default index
