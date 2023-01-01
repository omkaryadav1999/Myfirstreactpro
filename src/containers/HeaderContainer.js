import { connect } from "react-redux"
import Header from "../components/Header";

const mapStateToProp = state => ({
    data: state.cardItem
})
const mapDispatchToProp = dispatch => ({

})

export default connect(mapStateToProp, mapDispatchToProp)(Header)