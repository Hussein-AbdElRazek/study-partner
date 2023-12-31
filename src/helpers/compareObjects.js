export const compareObjects = (obj1, obj2) =>
{
    const diffs = {};
    for (const key in obj1)
    {
        if (obj2.hasOwnProperty(key))
        {
            // Check for primitive types
            if (typeof obj1[key] === 'string' || typeof obj1[key] === 'number')
            {
                if (obj1[key] !== obj2[key])
                {
                    diffs[key] = obj2[key];
                }
            } else if (Array.isArray(obj1[key]))
            {
                // Custom comparison for  array of objects
                if (obj1[key].length !== obj2[key].length) diffs[key] = obj2[key];
                obj1[key].forEach(ele1 =>
                {
                    obj2[key].forEach(ele2 =>
                    {
                        if (JSON.stringify(ele1) !== JSON.stringify(ele2))
                        {
                            diffs[key] = obj2[key];
                            return
                        }
                    })
                })
            }
        }
    }
    return diffs;
};
