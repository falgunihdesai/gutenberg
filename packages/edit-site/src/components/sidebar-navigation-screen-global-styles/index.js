/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { edit, seen } from '@wordpress/icons';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { __experimentalNavigatorButton as NavigatorButton } from '@wordpress/components';

/**
 * Internal dependencies
 */
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import StyleVariationsContainer from '../global-styles/style-variations-container';
import { unlock } from '../../private-apis';
import { store as editSiteStore } from '../../store';
import SidebarButton from '../sidebar-button';
import SidebarNavigationItem from '../sidebar-navigation-item';
import StyleBook from '../style-book';

export function SidebarNavigationItemGlobalStyles( props ) {
	const { openGeneralSidebar } = useDispatch( editSiteStore );
	const { setCanvasMode } = unlock( useDispatch( editSiteStore ) );
	const hasGlobalStyleVariations = useSelect(
		( select ) =>
			!! select(
				coreStore
			).__experimentalGetCurrentThemeGlobalStylesVariations()?.length,
		[]
	);
	if ( hasGlobalStyleVariations ) {
		return (
			<NavigatorButton
				{ ...props }
				as={ SidebarNavigationItem }
				path="/wp_global_styles"
			/>
		);
	}
	return (
		<SidebarNavigationItem
			{ ...props }
			onClick={ () => {
				// switch to edit mode.
				setCanvasMode( 'edit' );
				// open global styles sidebar.
				openGeneralSidebar( 'edit-site/global-styles' );
			} }
		/>
	);
}

function GlobalStylesStyleBook( { onSelect } ) {
	return (
		<StyleBook
			isSelected={ () => false }
			onSelect={ async ( blockName ) => {
				await onSelect( blockName );
			} }
		/>
	);
}

export default function SidebarNavigationScreenGlobalStyles() {
	const { openGeneralSidebar } = useDispatch( editSiteStore );
	const { setCanvasMode, setEditorCanvasContainerView } = unlock(
		useDispatch( editSiteStore )
	);

	const { isStyleBookOpened } = useSelect( ( select ) => {
		const { getEditorCanvasContainerView } = unlock(
			select( editSiteStore )
		);
		return {
			isStyleBookOpened: 'style-book' === getEditorCanvasContainerView(),
		};
	}, [] );

	const openGlobalStyles = async () =>
		Promise.all( [
			setCanvasMode( 'edit' ),
			openGeneralSidebar( 'edit-site/global-styles' ),
		] );

	return (
		<>
			<SidebarNavigationScreen
				title={ __( 'Styles' ) }
				description={ __(
					'Choose a different style combination for the theme styles.'
				) }
				content={ <StyleVariationsContainer /> }
				actions={
					<div>
						<SidebarButton
							icon={ seen }
							label={ __( 'Style Book' ) }
							onClick={ async () => {
								if ( ! isStyleBookOpened ) {
									setEditorCanvasContainerView(
										'style-book'
									);
								} else {
									setEditorCanvasContainerView( undefined );
								}
							} }
							isPressed={ isStyleBookOpened }
						/>
						<SidebarButton
							icon={ edit }
							label={ __( 'Edit styles' ) }
							onClick={ async () => await openGlobalStyles() }
						/>
					</div>
				}
			/>
			{ isStyleBookOpened && (
				<GlobalStylesStyleBook
					onSelect={ async () => {
						await openGlobalStyles();
						// Open the Style Book once the canvas mode is set to edit,
						// and the global styles sidebar is open. This ensures that
						// the Style Book is not prematurely closed.
						setEditorCanvasContainerView( 'style-book' );
					} }
				/>
			) }
		</>
	);
}
