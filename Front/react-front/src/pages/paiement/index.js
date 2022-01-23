import {connect} from 'react-redux';
import Paiement from './paiement';
import { getAllPaiement, deletePaiement , dataEditPaiement, search_Paiement , validationPaiement} from './../../redux/actions/paiementAction';

const mapStateToProps = ({layout,paiement}) => ({layout,paiement});

const mapDispatchToProps = {
    getAllPaiement,
    deletePaiement,
    dataEditPaiement,
    search_Paiement,
    validationPaiement
}

export default connect(mapStateToProps, mapDispatchToProps)(Paiement);