/*
 * process_manager
 */
import AB from "@digiserve/ab-utils";
const env = AB.defaults.env;

export default {
   process_manager: {
      /*************************************************************************/
      /* enable: {bool} is this service active?                                */
      /*************************************************************************/
      enable: env("PROCESS_MANAGER_ENABLE", true),
   },

   /**
    * datastores:
    * Sails style DB connection settings
    */
   datastores: AB.defaults.datastores(),
};
