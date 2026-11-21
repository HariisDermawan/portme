import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SkillController::update
 * @see app/Http/Controllers/SkillController.php:71
 * @route '/admin/skills/about'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/skills/about',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\SkillController::update
 * @see app/Http/Controllers/SkillController.php:71
 * @route '/admin/skills/about'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SkillController::update
 * @see app/Http/Controllers/SkillController.php:71
 * @route '/admin/skills/about'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\SkillController::update
 * @see app/Http/Controllers/SkillController.php:71
 * @route '/admin/skills/about'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SkillController::update
 * @see app/Http/Controllers/SkillController.php:71
 * @route '/admin/skills/about'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const about = {
    update: Object.assign(update, update),
}

export default about