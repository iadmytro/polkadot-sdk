(function() {var implementors = {
"assets_common":[["impl&lt;SelfParaId: Get&lt;ParaId&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.FromSiblingParachain.html\" title=\"struct assets_common::matching::FromSiblingParachain\">FromSiblingParachain</a>&lt;SelfParaId&gt;"],["impl&lt;IsForeign: ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.IsForeignConcreteAsset.html\" title=\"struct assets_common::matching::IsForeignConcreteAsset\">IsForeignConcreteAsset</a>&lt;IsForeign&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"staging_xcm/v3/multilocation/type.InteriorMultiLocation.html\" title=\"type staging_xcm::v3::multilocation::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;, Reserves: ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.IsTrustedBridgedReserveLocationForConcreteAsset.html\" title=\"struct assets_common::matching::IsTrustedBridgedReserveLocationForConcreteAsset\">IsTrustedBridgedReserveLocationForConcreteAsset</a>&lt;UniversalLocation, Reserves&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"staging_xcm/v3/multilocation/type.InteriorMultiLocation.html\" title=\"type staging_xcm::v3::multilocation::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;, ExpectedNetworkId: Get&lt;<a class=\"enum\" href=\"staging_xcm/v3/junction/enum.NetworkId.html\" title=\"enum staging_xcm::v3::junction::NetworkId\">NetworkId</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.FromNetwork.html\" title=\"struct assets_common::matching::FromNetwork\">FromNetwork</a>&lt;UniversalLocation, ExpectedNetworkId&gt;"]],
"frame":[],
"frame_support":[],
"pallet_assets":[["impl&lt;T: <a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; ContainsPair&lt;&lt;T as <a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_assets/pallet/trait.Config.html#associatedtype.AssetId\" title=\"type pallet_assets::pallet::Config::AssetId\">AssetId</a>, &lt;T as Config&gt;::AccountId&gt; for <a class=\"struct\" href=\"pallet_assets/pallet/struct.Pallet.html\" title=\"struct pallet_assets::pallet::Pallet\">Pallet</a>&lt;T, I&gt;"]],
"pallet_contracts_mock_network":[["impl&lt;T: Get&lt;(<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"enum\" href=\"staging_xcm/v3/multiasset/enum.MultiAssetFilter.html\" title=\"enum staging_xcm::v3::multiasset::MultiAssetFilter\">MultiAssetFilter</a>)&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>&gt; for <a class=\"struct\" href=\"pallet_contracts_mock_network/parachain/struct.TrustedLockerCase.html\" title=\"struct pallet_contracts_mock_network::parachain::TrustedLockerCase\">TrustedLockerCase</a>&lt;T&gt;"]],
"parachains_common":[["impl&lt;AssetLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.ConcreteAssetFromSystem.html\" title=\"struct parachains_common::xcm_config::ConcreteAssetFromSystem\">ConcreteAssetFromSystem</a>&lt;AssetLocation&gt;"],["impl&lt;Location: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.ConcreteNativeAssetFrom.html\" title=\"struct parachains_common::xcm_config::ConcreteNativeAssetFrom\">ConcreteNativeAssetFrom</a>&lt;Location&gt;"],["impl&lt;T: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"parachains_common/impls/struct.AssetsFrom.html\" title=\"struct parachains_common::impls::AssetsFrom\">AssetsFrom</a>&lt;T&gt;"]],
"penpal_runtime":[["impl&lt;Prefix, Origin&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/xcm_config/struct.AssetPrefixFrom.html\" title=\"struct penpal_runtime::xcm_config::AssetPrefixFrom\">AssetPrefixFrom</a>&lt;Prefix, Origin&gt;<span class=\"where fmt-newline\">where\n    Prefix: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;,\n    Origin: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;,</span>"],["impl&lt;AssetLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;, Origin: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/xcm_config/struct.AssetFromChain.html\" title=\"struct penpal_runtime::xcm_config::AssetFromChain\">AssetFromChain</a>&lt;AssetLocation, Origin&gt;"],["impl&lt;T: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/xcm_config/struct.NativeAssetFrom.html\" title=\"struct penpal_runtime::xcm_config::NativeAssetFrom\">NativeAssetFrom</a>&lt;T&gt;"]],
"staging_xcm_builder":[["impl&lt;T: Get&lt;(<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.MultiAssetFilter.html\" title=\"enum staging_xcm_builder::test_utils::MultiAssetFilter\">MultiAssetFilter</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>)&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiAsset.html\" title=\"struct staging_xcm_builder::test_utils::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.Case.html\" title=\"struct staging_xcm_builder::Case\">Case</a>&lt;T&gt;"],["impl ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiAsset.html\" title=\"struct staging_xcm_builder::test_utils::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.NativeAsset.html\" title=\"struct staging_xcm_builder::NativeAsset\">NativeAsset</a>"],["impl&lt;Prefix: Contains&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt;&gt; ContainsPair&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.AliasForeignAccountId32.html\" title=\"struct staging_xcm_builder::AliasForeignAccountId32\">AliasForeignAccountId32</a>&lt;Prefix&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()