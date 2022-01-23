import { connect } from "react-redux";
import Paiement from "./paiement";
import { postPaiement } from "../../../../redux/actions/paiementAction"

const mapStateToProps = ({layout, students}) => ({layout, students})

const mapDispatchToProps = {
    postPaiement,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paiement);