// app.routes.ts

import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './stories/stories.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { UserComponent } from './user/user.component';

/* An overview of what we’re doing here:
    - We just created an array of routes, each with a relative path that maps to a specific component.
    - Our header navigation links will route to a number of different paths; news, newest, show, ask and jobs.
    All these paths will map to our StoriesComponent.
    - We’ve set up our root path to redirect to news which should return the list of top stories.
    - When we map to StoriesComponent, we pass down storiesType as a parameter through the data property.
    This lets us have a story type associated for each route (we’ll need this when we use our data service
    to fetch the list of stories).
    - :page is used as a token so that StoriesComponent can fetch the list of stories for a specific page.
    - :id is similarly used so that ItemCommentsComponent can obtain all the comments for a specific item.
*/

const routes: Routes = [
    {path: '', redirectTo: 'news/1', pathMatch : 'full'},
    {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
    {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
    {path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
    {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
    {path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
    {path: 'item/:id', component: ItemCommentsComponent},
    {path: 'user/:id', component: UserComponent}
];

export const routing = RouterModule.forRoot(routes);
