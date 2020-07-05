import { useContext } from "react";

import dialogContext from "context/dialog";

const useDialog = () => useContext(dialogContext);

export default useDialog;
