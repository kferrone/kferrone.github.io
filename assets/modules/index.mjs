import {addTextToBody, includeHTML, getBlogPost} from '/assets/modules/util.mjs';
import('/assets/modules/me.mjs');

addTextToBody('Modules are pretty cool.');

getBlogPost('announcements','2018','11','04','StartingWithJekyll');

includeHTML();