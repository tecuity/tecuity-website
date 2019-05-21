import CMS from 'netlify-cms-app'
import styles from '../components/all.scss'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import GenericPagePreview from './preview-templates/GenericPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('privacy', GenericPagePreview)
CMS.registerPreviewStyle(styles.toString(), { raw: true })
