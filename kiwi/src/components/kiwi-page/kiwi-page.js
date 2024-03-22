import Heading from '../heading/heading';
import KiwiImage from '../kiwi-image/kiwi-image';

class KiwiPage {
    render() {
        const heading = new Heading();
        heading.render('Kiwi');
        const kiwiImg = new KiwiImage();
        kiwiImg.render();

        import('ImageCaptionApp/ImageCaption')
            .then(ImageCaptionModule => {
                const ImageCaption = ImageCaptionModule.default;
                const imgCaption = new ImageCaption();
                imgCaption.render('Kiwifruit is oval, about the size of a large egg.');
            });
    }
}

export default KiwiPage;
