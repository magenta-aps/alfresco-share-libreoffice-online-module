package dk.magenta.alfresco.libreOffice.online.evaluators;

import org.alfresco.error.AlfrescoRuntimeException;
import org.alfresco.web.evaluator.BaseEvaluator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * @author DarkStar1.
 */
public class CollaborativeLockEvaluator extends BaseEvaluator {
    private static final String ASPECT_COLLABORATION_LOCK = "mca:lockable";

    @Override
    public boolean evaluate(JSONObject jsonObject) {
        try {
            JSONArray nodeAspects = getNodeAspects(jsonObject);
            return nodeAspects != null && nodeAspects.contains(ASPECT_COLLABORATION_LOCK);

        } catch (Exception err) {
            throw new AlfrescoRuntimeException("Failed to run UI evaluator: " + err.getMessage());
        }
    }
}
