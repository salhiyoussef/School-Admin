import { connect } from "react-redux";
import EditPaiement from "./editPaiement";
import { putPaiement} from "../../../redux/actions/paiementAction";

const mapStateToProps = ({paiement}) => {
    let initialValues = {};
    const {dataEditePaiement: {data}} = paiement;
    if(data) {
        initialValues = {
            fraisInscription:data.fraisInscription,
            fraisTransport: data.fraisTransport,
            montant: data.montant,
        };
    }
    return { initialValues, paiement };
}

const mapDispatchToProps = {
    putPaiement,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPaiement);