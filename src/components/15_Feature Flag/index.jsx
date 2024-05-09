import React, { useContext } from 'react'
import LightDarkMode from '../8_Light Dark Mode'
import TicTacToe from '../14_Tic Tac Toe'
import RandomColor from '../2_Random Color'
import Accordion from '../1_Accordian'
import TreeView from '../6_Tree View'
import { FeatureFlagsContext } from './context'
import menus from '../6_Tree View/data'
import "./featureFlag.css"

function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />
        },
        {
            key: "showAccordian",
            component: <Accordion />
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />
        },
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }

    if(loading) return <h1>Loading data! Please wait.</h1>

  return (
    <div className='feature-flags-container'>
        <h1>FeatureFlags</h1>
        {
            componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
        }
    </div>
  )
}

export default FeatureFlags