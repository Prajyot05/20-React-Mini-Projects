import './App.css'
import Accordion from './components/1_Accordian'
import RandomColor from './components/2_Random Color'
import StarRating from './components/3_Star Rating'
import ImageSlider from './components/4_Image Slider'
import LoadMore from './components/5_Load More'
import TreeView from './components/6_Tree View'
import menus from "./components/6_Tree View/data"
import QRCodeGenerator from './components/7_QR Code Generator'
import LightDarkMode from './components/8_Light Dark Mode'
import ScrollIndicator from './components/9_Scroll Indicator'
import TabTest from './components/10_Custom Tabs/tab-test'
import ModalTest from './components/11_Custom Modal Popup/modal-test'
import GithubProfileFinder from './components/12_Github Profile Finding'
import SearchAutocomplete from './components/13_Search Autocomplete'
import TicTacToe from './components/14_Tic Tac Toe'
import FeatureFlagGlobalState from './components/15_Feature Flag/context'
import FeatureFlags from './components/15_Feature Flag'
import UseFetchHookTest from './components/16_useFetch/test'
import UseOnClickOutsideTest from './components/17_useOutsideClick/test'
import UseWindowResizeTest from './components/18_useWindowResize/test'
import ScrollToTopAndBottom from './components/19_Scroll To Top & Bottom'

function App() {

  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating numOfStars={10} />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />
      {/* <LoadMore /> */}
      <TreeView menus={menus}/>
      <QRCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=50'} />
      <TabTest />
      <ModalTest />
      <GithubProfileFinder />
      <SearchAutocomplete />
      <TicTacToe />
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest /> */}
      {/* <UseOnClickOutsideTest /> */}
      <UseWindowResizeTest />
      <ScrollToTopAndBottom />
    </>
  )
}

export default App
