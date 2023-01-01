import { connect } from "react-redux"
import Home from "../components/Home";
import { addtocart } from "../Service/Action/Action.js";

const mapStateToProp = state => ({
    data: state.cardItem
})
const mapDispatchToProp = dispatch => ({
    addTocartHandler: data => dispatch(addtocart(data))
})

export default connect(mapStateToProp, mapDispatchToProp)(Home)
